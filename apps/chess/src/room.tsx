import { createComputed, createSignal, PropsWithChildren, Show } from "solid-js";
import { BeamerClient } from "./server/api/client";
import { generateClientId } from "./server/api/id";
import { useNavigate } from "solid-app-router";
import createClipboard from "@solid-primitives/clipboard";
import { createContext } from "solid-js";
import { urlSearchParams, beamerServerUrl } from "./Scene";

export const RoomContext = createContext<ReturnType<typeof createRoom>>();

function createRoom({
  playerName,
  getJoinUrl = roomCode => {
    return (
      document.location.origin +
      document.location.pathname +
      "?" +
      new URLSearchParams({ room: roomCode }).toString()
    );
  }
}) {
  const [roomCode, setRoomCode] = createSignal(urlSearchParams.get("room") || "");

  let quickJoinUrl = () => getJoinUrl(roomCode());

  const [role, setRole] = createSignal("" as "host" | "peer");
  const [client, setClient] = createSignal<BeamerClient | null>(null);
  const [pname, setPlayerName] = createSignal(playerName);

  const clientId = generateClientId();
  let navigate = useNavigate();
  const [setClipboard] = createClipboard();
  const eventTarget = new EventTarget();

  async function hostRoom() {
    setRole("peer");
    setClient(new BeamerClient(beamerServerUrl, role()));
    client().onMessage = m => {
      eventTarget.dispatchEvent(new MessageEvent("message", { data: m }));
    };

    const roomResponse = await client()!.requestRoom();

    if (roomResponse.ok) {
      let roomCode = roomResponse.data.room.roomCode;
      await client().joinRoom(pname(), roomCode, clientId);
      setRoomCode(roomCode);
      setClipboard(quickJoinUrl());
      navigate(`/?room=${roomCode}`);
    } else {
      console.error(roomResponse);
    }
  }

  async function joinRoom() {
    setRole("peer");
    setClient(new BeamerClient(beamerServerUrl, role()));
    client().onMessage = m => {
      eventTarget.dispatchEvent(new MessageEvent("message", { data: m }));
    };
    await client().joinRoom(pname(), roomCode(), clientId);
  }

  createComputed(() => {
    if (!!urlSearchParams.get("room")) {
      joinRoom();
    }
  });

  return {
    role,
    client,
    quickJoinUrl,
    hostRoom,
    joinRoom,
    roomCode,
    setPlayerName,
    addEventListener: eventTarget.addEventListener.bind(eventTarget),
    removeEventListener: eventTarget.removeEventListener.bind(eventTarget),
    playerName: pname,
    copyLink: () => setClipboard(quickJoinUrl())
  };
}

export const RoomProvider = ({
  children,
  playerName = undefined
}: PropsWithChildren<{
  playerName?: string;
}>) => {
  const room = createRoom({
    playerName: playerName ?? "player" + Math.floor(Math.random() * 1000)
  });
  return <RoomContext.Provider value={room}>{children}</RoomContext.Provider>;
};
