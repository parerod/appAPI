import { Driver } from "./driver";

export interface ApiResponse {
  MRData: {
    xmlns: string;
    series: string;
    limit: string;
    offset: string;
    total: string;
    DriverTable: {
      Drivers: Driver[];
    };
  };
}