/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React, { useEffect, useState } from "react";
import Head from "next/head";

import dateToString from "../../util/dateToString";
import GroupSelector from "../../components/GroupSelector";
import DaySelector from "../../components/DaySelector";
import Timetable from "../../components/Timetable";
import { GetStaticProps, GetStaticPaths } from "next/types";
import { promises, promises as fs } from "fs";
import { join } from "path";
import Link from "next/link";

interface Props {
  group: string;
  tables: Array<{
    id: string;
    table: {
      [key: string]: Array<{
        name: string;
        tutor: string;
        type: string;
        start: number;
        length: number;
        location: string;
      }>;
    };
  }>;
}

const TimetablePage = (props: Props): React.ReactElement => {
  const today = new Date().getDay().toString();
  const [group, setGroup] = useState<number>(0);
  const [day, setDay] = useState<string>(today);
  const [table, setTable] = useState<any>();
  const [stringDate, setStringDate] = useState<string>();

  useEffect(() => {
    if (!group) {
      setGroup(0);
    }

    if (!day) {
      setDay(today);
    }

    setStringDate(dateToString(day));

    setTable(props.tables[group].table[day]);
  });

  return (
    <>
      <Head>
        <title>Timetable of {props.group} | Maid's Times</title>
        <meta property="og:title" content={"Timetable of " + props.group} />
        <meta
          property="og:description"
          content={
            "In this page you can get timetable for " + props.group + " groups"
          }
        />
      </Head>
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 pt-8 mb-16">
        <Link href="/td">
          <a className="link border rounded-md p-2 ml-2">← Back to overview</a>
        </Link>
        <div className="mt-2 grid gap-2 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
          <GroupSelector action={group} setAction={setGroup} />
          <DaySelector action={day} setAction={setDay} />
        </div>
      </div>
      <div className="mx-4 lg:mx-32 mb-12">
        <div className="my-4 text-white text-center">
          Showing timetable for {props.group}
          {group + 1} on {stringDate}
        </div>
        {(() => {
          if (!table) {
            return <div>Table is loading</div>;
          } else {
            return <Timetable table={table} today={day} />;
          }
        })()}
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const dirs = await fs.readdir("./public/timetable");
  const paths = dirs.map((id) => ({
    params: { group: id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const group = ctx.params!.group;
  const dir = await promises.readdir("./public/timetable/" + group);
  const tableIds = dir.filter((name) => name.endsWith(".json"));
  const tables = await Promise.all(
    tableIds.map(async (name) => {
      const file = await promises.readFile(
        join("./public/timetable/" + group, name),
        {
          encoding: "utf8",
        }
      );
      return { id: name.replace(/\.json$/, ""), table: JSON.parse(file) };
    })
  );
  return {
    props: { group, tables },
  };
};

export default TimetablePage;
