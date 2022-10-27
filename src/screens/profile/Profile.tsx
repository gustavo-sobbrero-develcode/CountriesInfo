import {gql, useQuery} from '@apollo/client';
import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {Country} from '../home/Home';
import {HeaderContainer, Title} from '../home/styles';
import {Container} from './styles';

interface Continent {
  name: string;
  code: string;
  countries?: {
    name?: string;
  };
}

const QUERY = gql`
  query {
    continents {
      name
      countries {
        name
      }
    }
  }
`;

const Continent = ({item}: {item: Continent}) => {
  return (
    <Container>
      <Text>{item.name}</Text>
      <Text>{item.code}</Text>
      <Text>
        {item?.countries?.map((country): Country => {
          return country.name + ' ';
        })}
      </Text>
    </Container>
  );
};

const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <Title>Continents</Title>
    </HeaderContainer>
  );
};

const Profile = () => {
  const {data, loading} = useQuery(QUERY);

  return (
    <View
      style={{
        justifyContent: 'center',
        height: '100%',
      }}>
      {!loading ? (
        <FlatList
          data={data?.continents}
          renderItem={Continent}
          ListHeaderComponent={HeaderComponent}
        />
      ) : (
        <ActivityIndicator size={'large'} />
      )}
    </View>
  );
};

export default Profile;
