import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Create, useForm } from "@refinedev/mantine";
import { TextInput } from "@mantine/core";

export const CategoryCreate: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const {
        getInputProps,
        saveButtonProps,
        setFieldValue,
        refineCore: { formLoading },
    } = useForm({
        initialValues: { title: "" },
    });

    return (
        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <TextInput
                mt="sm"
                label={translate("categories.fields.title")}
                {...getInputProps("title")}
            />
        </Create>
    );
};
