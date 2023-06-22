import {
    IResourceComponentsProps,
    useShow,
    useTranslate,
} from "@refinedev/core";
import { Show, NumberField, TextField } from "@refinedev/mantine";
import { Title } from "@mantine/core";

export const CategoryShow: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title my="xs" order={5}>
                {translate("categories.fields.id")}
            </Title>
            <NumberField value={record?.id ?? ""} />
            <Title my="xs" order={5}>
                {translate("categories.fields.title")}
            </Title>
            <TextField value={record?.title} />
        </Show>
    );
};
