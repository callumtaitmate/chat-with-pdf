'use client';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation';


export const formSchema = z.object({
    search: z.string().min(2).max(50),
})


function SearchForm() {

    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            search: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);

        router.push(`/search?company=${values.search}`)
    }
    return (
        <div className="px-5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col md:max-w-md">
                    <div className="grid-w-full items-center">
                        <FormField
                            control={form.control}
                            name="search"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Company Name" {...field} />

                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className='mx-auto mt-4'>
                            <Button className="bg-indigo-600" type="submit">Search</Button></div>

                    </div>



                </form>
            </Form>
        </div>

    )
}

export default SearchForm;

