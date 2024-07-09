export interface TimeData {
  datetime: string;
  temp: number;
  conditions: string;
  icon: string;
}

export interface WeatherResponse {
  resolvedAddress: "string";
  timezone: "string";
  days: Array<
    TimeData & {
      description: string;
      hours: TimeData[];
    }
  >;
}
