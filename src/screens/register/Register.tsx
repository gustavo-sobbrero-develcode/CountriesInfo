import {gql, useMutation} from '@apollo/client';
import React, {useState} from 'react';
import {Button, Linking} from 'react-native';
import {RegisterInput, Title} from './styles';
import {Container, SubmitButton} from './styles';

const INSERT_USER = gql`
  mutation Mutation($user: UserInput!) {
    adicionaUser(user: $user) {
      nome
    }
  }
`;

const Register = () => {
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

  const Url_Ole = 'https://www.ole.com.ar/';

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
      <Button title="Navegar" onPress={() => Linking.openURL(Url_Ole)} />
    </Container>
  );
};

export default Register;
