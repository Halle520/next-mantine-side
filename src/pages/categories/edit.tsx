import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Edit, useForm } from "@refinedev/mantine";
import { NumberInput, TextInput } from "@mantine/core";

export const CategoryEdit: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const {
        getInputProps,
        saveButtonProps,
        setFieldValue,
        refineCore: { queryResult },
    } = useForm({
        initialValues: { id: "", title: "" },
    });

    const categoriesData = queryResult?.data?.data;

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <NumberInput
                mt="sm"
                disabled
                label={translate("categories.fields.id")}
                {...getInputProps("id")}
            />
            <TextInput
                mt="sm"
                label={translate("categories.fields.title")}
                {...getInputProps("title")}
            />
        </Edit>
    );
};
