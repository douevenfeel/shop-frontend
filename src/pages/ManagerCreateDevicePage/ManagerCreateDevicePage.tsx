import { useAppDispatch } from 'hooks/redux';
import { FieldValues, useForm } from 'react-hook-form';
import { fetchCreateDeviceAction } from 'store/actions/deviceAction';
import { Button, Container, Form, Input, Paragraph } from 'utils/styles';

export const ManagerCreateDevicePage = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useAppDispatch();

    const onSubmit = (data: FieldValues) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('price', data.price);
        formData.append('brandTitle', data.brandTitle);
        formData.append('image', data.image[0]);
        dispatch(fetchCreateDeviceAction(formData as any));
    };

    return (
        <Container justifyContent='center' padding='12px' width='calc(100vw - 300px)' flexDirection='column'>
            <Form onSubmit={handleSubmit(onSubmit)} gap='8px'>
                <Paragraph>Title: </Paragraph>
                <Input placeholder="Input device's title..." {...register('title', { required: true })} />
                <Paragraph>Price: </Paragraph>
                <Input placeholder="Input device's price..." {...register('price', { required: true })} />
                <Paragraph>Brand: </Paragraph>
                <Input placeholder="Input device's brand..." {...register('brandTitle', { required: true })} />
                <Paragraph>Image: </Paragraph>
                <Input
                    type='file'
                    accept='.png'
                    placeholder="Input device's image..."
                    {...register('image', { required: true })}
                />
                <Button type='submit'>Create device</Button>
            </Form>
        </Container>
    );
};
