"use client";

import { useState } from "react";
import axios from "axios";
import { format, parseISO } from "date-fns";

const ENV = process.env.NEXT_PUBLIC_MIDDLEWARE;

const timeZone =
  Intl && Intl.DateTimeFormat
    ? Intl.DateTimeFormat().resolvedOptions().timeZone
    : "America/Mexico_City";

export default function Page () {
  const [tasks, setTasks]:any = useState();

  const getTasks = async () => {
    try {
      const resp = await axios.get(ENV + "/api/tasks/");
      console.log("resp fetchData::", resp.data);
      setTasks(resp.data);
    } catch (error) {
      console.error("error fetchData:", error);
    }
  };

  const formatDate = (timestamp:any) => {
    const parseTimestamp = parseISO(timestamp);
    return format(parseTimestamp, "dd/MM/yyyy HH:mm:ss", { timeZone } as any);
  };

  return (
    <div style={{ height: "70vh" }} className="container p-5">
      <button
        onClick={() => {
          getTasks();
        }}
      >
        GET TASKS
      </button>
      <div className="grid grid-cols-3 p-2">
        {tasks?.map((task:any, i:any) => (
          <div key={i} className="card p-2 mt-2 text-black">
            <div>title: {task.title}</div>
            <div>description: {task.description}</div>
            <div>isDone: {task.isDone}</div>
            <div>fechaRespuesta: {task.createdAt}</div>
            <div>fechaFormated: {formatDate(task.createdAt)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
