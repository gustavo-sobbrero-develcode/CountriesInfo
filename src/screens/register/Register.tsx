import {gql, useMutation} from '@apollo/client';
import React, {useState} from 'react';
import {Button, Linking} from 'react-native';
import {RegisterInput, Title} from './styles';
import {Container, SubmitButton} from './styles';
import {useLinkTo} from '@react-navigation/native';

const INSERT_USER = gql`
  mutation Mutation($user: UserInput!) {
    adicionaUser(user: $user) {
      nome
    }
  }
`;

const Register = () => {
  const linkTo = useLinkTo();
  const [adicionaUser] = useMutation(INSERT_USER);

  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [role, setRole] = useState<string>('ESTUDANTE');

  const user = {
    nome,
    ativo: true,
    email,
    role,
  };

  const create = async () => {
    try {
      const res = await adicionaUser({
        variables: {user: user},
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const Url_Insta = 'https://instagram.com';
  // const Link_SendMail = ;

  return (
    <Container>
      <RegisterInput placeholder="Nome" onChangeText={setNome} value={nome} />
      <RegisterInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <RegisterInput placeholder="Role" onChangeText={setRole} value={role} />
      <SubmitButton onPress={create}>
        <Title>Enviar</Title>
      </SubmitButton>
      <Button
        title="Navegar para tela Countries"
        onPress={() => linkTo('/h')}
      />
      <Button
        title="Navegar para URL externa"
        onPress={() => Linking.openURL(Url_Insta)}
      />
      <Button
        title="Realizar ligação telefônica"
        onPress={() => Linking.openURL('tel:54981096835')}
      />
      <Button
        title="Enviar SMS"
        onPress={() => Linking.openURL('sms:54981096835')}
      />
    </Container>
  );
};

export default Register;
