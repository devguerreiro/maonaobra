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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  job: z.string().uuid({
    message: "Selecione uma especialidade",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function Home() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      job: "",
    },
  });

  function getJobs() {
    return ["pedreiro", "mestre de obra"];
  }

  const jobs = getJobs();

  function handleSubmit(values: FormSchema) {
    console.log(values);
  }

  return (
    <div className="container w-screen h-screen flex flex-col justify-center items-center gap-4">
      <p className="text-center text-balance">
        Selecione a especialidade que deseja buscar prestadores
      </p>
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="job"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
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
      </Form>
    </div>
  );
}
