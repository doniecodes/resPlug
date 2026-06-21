import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'


const FeedChips = ({categories}) => {
  
  //Categories conditional rendering
  const chips = categories && categories.map((x)=> {
    if(x === "Study") {
      return (
        <>
          <Ionicons
          size={12}
          name="book-outline"
          color="inherit"
          />
          <Text>Study</Text>
        </>
        )
    }
    if(x === "Food") {
      return (
        <>
          <Ionicons
          size={12}
          name="pizza-outline"
          color="inherit"
          />
          <Text>Food</Text>
        </>
        )
    }
    if(x === "Entertainment") {
      return (
        <>
          <Ionicons
          size={12}
          name="film-outline"
          color="inherit"
          />
          <Text>Entertainment</Text>
        </>
        )
    }
    if(x === "Fitness") {
      return (
        <>
          <Ionicons
          size={12}
          name="fitness-outline"
          color="inherit"
          />
          <Text>Fitness</Text>
        </>
        )
    }
    if(x === "Social") {
      return (
        <>
          <Ionicons
          size={12}
          name="people-outline"
          color="inherit"
          />
          <Text>Social</Text>
        </>
        )
    }
    if(x === "Marketplace") {
      return (
        <>
          <Ionicons
          size={12}
          name="pricetag-outline"
          color="inherit"
          />
          <Text>Marketplace</Text>
        </>
        )
    }
    if(x === "Gaming") {
      return (
        <>
          <Ionicons
          size={12}
          name="game-controller-outline"
          color="inherit"
          />
          <Text>Gaming</Text>
        </>
        )
    }
  });
  
  return (
    <>
      {chips}
    </>
  );
};

export default FeedChips;