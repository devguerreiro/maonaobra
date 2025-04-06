import { useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  jobs: Array<string>;
  cities: Array<string>;
};

export default function Filters({ jobs, cities }: Readonly<Props>) {
  const searchParams = useSearchParams();

  const { replace } = useRouter();

  function getCityDefaultValue() {
    return searchParams.get("Cidade") ?? "";
  }

  function getJobDefaultValue() {
    return searchParams.get("Especialidade") ?? "";
  }

  function onSearch(query: Record<string, string>) {
    const params = new URLSearchParams(searchParams);

    for (const [key, value] of Object.entries(query)) {
      params.set(key, value);
    }

    replace("?" + new URLSearchParams(params));
  }

  return (
    <div className="container bg-card p-2 rounded shadow space-y-3">
      <Select
        onValueChange={(value) => onSearch({ Cidade: value })}
        defaultValue={getCityDefaultValue()}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Cidade" />
        </SelectTrigger>
        <SelectContent>
          {cities.map((city) => (
            <SelectItem key={city} value={city}>
              {city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value) => onSearch({ Especialidade: value })}
        defaultValue={getJobDefaultValue()}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Especialidade" />
        </SelectTrigger>
        <SelectContent>
          {jobs.map((job) => (
            <SelectItem key={job} value={job}>
              {job}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
