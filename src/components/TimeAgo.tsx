"use client";
import ReactTimeAgo from "react-time-ago";
import TimeAgoLib from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";
TimeAgoLib.addDefaultLocale(en);

export default function TimeAgo({ date }: { date: Date }) {
  return <ReactTimeAgo date={date} locale="en" />;
}
