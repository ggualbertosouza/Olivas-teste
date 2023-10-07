import { formProps, schema } from "@/components/form/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


export const useSendEmail = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<formProps>({
      mode: "onChange",
      criteriaMode: "all",
      resolver: zodResolver(schema),
    });
  
    const handleForm = (data: formProps) => console.log(data);
    return{
        handleForm,
        register,
        handleSubmit,
        errors
    }

}