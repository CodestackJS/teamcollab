// "use client";
// import ErrorMessage from "@/app/components/ErrorMessage";
// import Spinner from "@/app/components/Spinner";
// import { createIssueSchema } from "@/app/validationSchemas";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Button, Callout, TextField } from "@radix-ui/themes";
// import axios from "axios";
// import "easymde/dist/easymde.min.css";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import SimpleMDE from "react-simplemde-editor";
// interface IssueForm {
//   title: string;
//   description: string;
// }
// const NewIssuePage = () => {
//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IssueForm>({
//     resolver: zodResolver(createIssueSchema),
//   });
//   const [error, setError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const router = useRouter();
//   const onSubmit = handleSubmit(async (data) => {
//     try {
//       setIsSubmitting(true);
//       await axios.post("/api/issues", data);
//       router.push("/issues");
//     } catch (error) {
//       setIsSubmitting(false);
//       setError("An unexpected error has occurred");
//     }
//   });
//   return (
//     <>
//       <div className="max-w-xl">
//         {error && (
//           <Callout.Root color="red" className="mb-5">
//             <Callout.Text>{error}</Callout.Text>
//           </Callout.Root>
//         )}
//         <form className=" space-y-3" onSubmit={onSubmit}>
//           <TextField.Root size="2" placeholder="title" {...register("title")} />
//           <ErrorMessage>{errors.title?.message}</ErrorMessage>
//           <Controller
//             name="description"
//             control={control}
//             render={({ field }) => (
//               <SimpleMDE placeholder="description" {...field} />
//             )}
//           />
//           <ErrorMessage>{errors.description?.message}</ErrorMessage>
//           <Button disabled={isSubmitting}>
//             Submit New Issue {isSubmitting && <Spinner />}
//           </Button>
//         </form>
//       </div>
//     </>
//   );
// };
// export default NewIssuePage;

import React from 'react'
import IssueForm from '../_componenets/IssueForm'

const NewIssuePage = () => {
  return (
    <>
    <IssueForm/>
    </>
  )
}

export default NewIssuePage