import {gql, useQuery} from '@apollo/client';
import {useLinkTo} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, Button, FlatList, Text, View} from 'react-native';
import {Container, Flag, HeaderContainer, LeftSide, Title} from './styles';

export interface Country {
  name: string;
  code: string;
  capital: string;
  currency: string;
  emoji: string;
  emojiU: string;
  languages?: {
    name?: string;
  };
}

const QUERY = gql`
  query {
    countries {
      name
      code
      capital
      currency
      emoji
      languages {
        name
      }
    }
  }
`;

const Country = ({item}: {item: Country}) => {
  return (
    <Container>
      <LeftSide>
        <Text>Name: {item.name}</Text>
        <Text>Code: {item.code}</Text>
        <Text>Currency: {item.currency}</Text>
        <Text>Capital: {item.capital}</Text>
        <Text>
          Languages:
          {item.languages?.map(language => {
            return ' ' + language.name + ' ';
          })}
        </Text>
      </LeftSide>

      <Flag>{item.emoji}</Flag>
    </Container>
  );
};

const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <Title>Countries</Title>
    </HeaderContainer>
  );
};

const Countries = () => {
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
            title="Navegar para tela Continents"
            onPress={() => linkTo('/p')}
          />

          <FlatList
            data={data?.countries}
            renderItem={Country}
            ListHeaderComponent={HeaderComponent}
          />
        </>
      ) : (
        <ActivityIndicator size={'large'} />
      )}
    </View>
  );
};

export default Countries;
