"use client";

import * as z from "zod";
import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm, FormProvider, useFormContext, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./constants";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FormSchemaType = z.infer<typeof formSchema>;

const ConversationForm = () => {
    const { control, handleSubmit, formState } = useFormContext<FormSchemaType>();

    const isLoading = formState.isSubmitting;

    const onSubmit: SubmitHandler<FormSchemaType> = async (values) => {
        console.log(values);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
            <FormField name="prompt" control={control} render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                        <Input
                            className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                            disabled={isLoading}
                            placeholder="What is the 2nd Law of Thermodynamics?"
                            {...field}
                        />
                    </FormControl>
                </FormItem>
            )} />
            <Button type="submit" className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>Answer</Button>
        </form>
    );
};

const ConversationPage = () => {
    const methods = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        },
    });

    return (
        <FormProvider {...methods}>
            <div>
                <Heading
                    title="Conversation"
                    description="Our most advanced conversation model."
                    icon={MessageSquare}
                    iconColor="text-violet-500"
                    bgColor="bg-violet-500/10"
                />
                <div className="px-4 lg:px-8">
                    <div>
                        <ConversationForm />
                    </div>
                    <div className="space-y-4 mt-4">Messages Content</div>
                </div>
            </div>
        </FormProvider>
    );
};

export default ConversationPage;
