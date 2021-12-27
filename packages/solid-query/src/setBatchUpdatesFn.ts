import { notifyManager } from "react-query/core";
import { batch } from "solid-js";

notifyManager.setBatchNotifyFunction(batch);
