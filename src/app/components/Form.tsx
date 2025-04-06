"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form as BaseForm,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  job: z.string().min(1, "Selecione uma especialidade"),
});

type FormSchema = z.infer<typeof formSchema>;

type Props = {
  jobs: Array<string>;
};

export default function Form({ jobs }: Readonly<Props>) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      job: "",
    },
  });

  function handleSubmit(values: FormSchema) {
    console.log(values);
  }

  return (
    <BaseForm {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="job"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Especialidade" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {jobs.map((job) => (
                    <SelectItem key={job} value={job}>
                      {job}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Buscar
        </Button>
      </form>
    </BaseForm>
  );
}
