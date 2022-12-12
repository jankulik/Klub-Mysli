import { Text, Title, SimpleGrid, TextInput, Textarea, Button, Group } from '@mantine/core';
import ContactIcons from '../ContactIcons';
import { useStyles } from './styles';
import emailjs from '@emailjs/browser';
import { useForm } from '@mantine/form';
import React, { useRef } from 'react';
import { showNotification, updateNotification } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons';

export function ContactUs() {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },

    validate: {
      email: (value) => (value != '' ? (/^\S+@\S+$/.test(value) ? null : 'Niepoprawny email') : 'Proszę podać email'),
      name: (value) => (value != '' ? null : 'Proszę podać imię'),
      message: (value) => (value != '' ? null : 'Proszę podać wiadomość'),
    },
  });

  const formRef = useRef(null);
  const sendEmail = () => {
    showNotification({
      id: 'send-message',
      loading: true,
      title: 'Wysyłanie wiadomości',
      message: null,
      autoClose: false,
      disallowClose: true,
    });

    emailjs.sendForm('service_bx91ruu', 'template_5g13bni', formRef.current!, 'SgTjlkDyzYjc7GwiA')
      .then((result) => {
        console.log(result.text);
        updateNotification({
          id: 'send-message',
          color: 'teal',
          title: 'Wiadomość została wysłana',
          message: 'Odpowiemy tak szybko, jak to możliwe',
          icon: <IconCheck size={16} />,
          autoClose: 5000,
        });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title className={classes.title}>Skontaktuj się z nami</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Barbara Wojtaszek – Prezeska zarządu Fundacji Klub Myśli Ekologicznej
          </Text>

          <ContactIcons />
        </div>

        <form className={classes.form} ref={formRef} onSubmit={form.onSubmit(sendEmail)} noValidate>
          <TextInput
            name="user_email"
            label="Email"
            placeholder="twój@email.com"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps('email')}
          />
          <TextInput
            name="from_name"
            label="Imię"
            placeholder="Jan Kowalski"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps('name')}
          />
          <Textarea
            name="message"
            label="Wiadomość"
            placeholder="Treść wiadomości..."
            minRows={8}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps('message')}
          />

          <Group position="right" mt="md">
            <Button type="submit" className={classes.control}>Wyślij wiadomość</Button>
          </Group>
        </form>
      </SimpleGrid>
    </div>
  );
}
