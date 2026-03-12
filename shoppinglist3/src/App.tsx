import { Container, AppBar, Toolbar, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import AddItem from './assets/AddItem';
import './App.css';

export type Item = {
  product: string;
  amount: string;
  price: number;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems([item, ...items]);
  };

  return (
    <Container>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div"sx={{ flexGrow: 1, textAlign: 'center' }}>
            Shopping List
          </Typography>
        </Toolbar>
      </AppBar>  
      <AddItem addItem={addItem} />      
      <List>
        {items.map((item, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={item.product}
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.secondary">
                    Amount: {item.amount}
                  </Typography>
                  {" | "}
                  <Typography component="span" variant="body2" color="primary">
                    Price: ${item.price.toLocaleString()}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;