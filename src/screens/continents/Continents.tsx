import {gql, useQuery} from '@apollo/client';
import {useLinkTo} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, Button, FlatList, Text, View} from 'react-native';
import {Country} from '../countries/Countries';
import {HeaderContainer, Title} from '../countries/styles';
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
//a
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

const Continents = () => {
  const {data, loading} = useQuery(QUERY);
  const linkTo = useLinkTo();

  return (
    <View
      style={{
        justifyContent: 'center',
        height: '100%',
      }}>
      {!loading ? (
        <>
          <Button
            title="Navegar para tela Countries"
            onPress={() => linkTo('/h')}
          />
          <FlatList
            data={data?.continents}
            renderItem={Continent}
            ListHeaderComponent={HeaderComponent}
          />
        </>
      ) : (
        <ActivityIndicator size={'large'} />
      )}
    </View>
  );
};

export default Continents;
