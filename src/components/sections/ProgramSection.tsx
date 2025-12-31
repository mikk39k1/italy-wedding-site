"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const programDays = [
  {
    date: "21.09.2026",
    dateString: "Mandag",
    title: "Ankomst og velkomst",
    activities: [
      { time: "15:00", activity: "Herfra kan man ankomme" },
      { time: "19:00", activity: "Aftensmad" },
    ],
  },
  {
    date: "22.09.2026",
    dateString: "Tirsdag",
    title: "Forberedelser og hygge",
    activities: [
      { time: "09:00", activity: "Morgenmad" },
      { time: "13:00", activity: "Fælles aktivitet" },
      { time: "19:00", activity: "Aftensmad" },
      { time: "00:00", activity: "Senest godnat (fast på denne dag)" },
    ],
  },
  {
    date: "23.09.2026",
    dateString: "Onsdag",
    title: "Bryllupsfest",
    activities: [
      { time: "09:00", activity: "Pilates med Ida" },
      { time: "10:00", activity: "Brunch" },
      { time: "16:00", activity: "Vielse" },
      { time: "17:00", activity: "Reception og appetizers" },
      { time: "19:00", activity: "Middag og taler" },
      { time: "23:00", activity: "Brudevals og FEST" },
      { time: "01:00", activity: "Natmad" },
    ],
  },
  {
    date: "24.09.2026",
    dateString: "Torsdag",
    title: "Tømmermændsdag",
    activities: [
      { time: "10:00", activity: "Morgenmad" },
      { time: "13:00", activity: "Fælles aktivitet" },
      { time: "19:00", activity: "Aftensmad" },
    ],
  },
  {
    date: "25.09.2026",
    dateString: "Fredag",
    title: "Afslutning og afrejse",
    activities: [
      { time: "09:00", activity: "Morgenmad" },
      { time: "11:00", activity: "Udtjekning og tak for nu <3" },
    ],
  },
];

function ProgramDay({
  date,
  dateString,
  title,
  activities,
}: {
  date: string;
  dateString: string;
  title: string;
  activities: { time: string; activity: string }[];
}) {
  return (
    <div>
      <h3 className="text-gray-900 text-2xl font-light mb-2">{title}</h3>
      <h4 className="text-gray-900 text-lg font-light mb-4">
        {dateString} - {date}
      </h4>
      <div className="flex flex-col gap-2">
        {activities.map((activity) => (
          <div key={activity.time}>
            <div className="flex flex-row gap-2">
              <p className="text-gray-900 text-base font-light">{activity.time}</p>
              <p className="text-gray-900 text-base font-light">{activity.activity}</p>
            </div>
            <div className="block border-b border-gray-200 w-full h-1" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProgramSection() {
  const [selectedDateString, setSelectedDateString] = useState(programDays[0].dateString);

  const selectedDay = programDays.find((day) => day.dateString === selectedDateString)!;

  return (
    <section
      id="program"
      className="relative flex flex-col  px-6 pb-12 pt-12 sm:px-8 md:px-16 lg:px-28"
    >
      <header className="max-w-xl">
        <h2 className="my-6 text-4xl tracking-wide text-gray-900 font-light">Program</h2>
      </header>
      <p className="text-gray-900 mb-4 ">
        Programmet er lavet som en løs ramme for dagene, så I har en fornemmelse af, hvad der
        venter. Intet er fastlagt, og dagene får lov at forme sig undervejs.
        <br /> Det er naturligvis frivilligt om man deltager i de fælles aktiviteter.{" "}
      </p>
      <div className="w-full flex justify-left mb-6">
        <Select value={selectedDateString} onValueChange={setSelectedDateString}>
          <SelectTrigger className="w-full bg-white font-semibold">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectLabel>Dato</SelectLabel>
              {programDays.map((day) => (
                <SelectItem
                  key={day.dateString}
                  className="cursor-pointer hover:bg-gray-100"
                  value={day.dateString}
                >
                  {day.dateString}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col w-full">
        <ProgramDay
          date={selectedDay.date}
          dateString={selectedDay.dateString}
          title={selectedDay.title}
          activities={selectedDay.activities}
        />
      </div>
    </section>
  );
}
