import { useState } from "react";
import { TextField, Dialog, DialogActions, DialogTitle, DialogContent, Button, Stack } from "@mui/material";
import { Item } from "../App";

type AddItemProps = {
  addItem: (item: Item) => void;
}

export default function AddItem(props: AddItemProps) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<Item>({
    product: '',
    amount: '',
    price: 0,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);

    setItem({ product: '', amount: '', price: 0 });
  };

  const addItem = () => {
    props.addItem(item);
    handleClose();
  };

  return (
    <div style={{ marginTop: '20px', marginBottom: '10px' }}>
      <Button onClick={handleOpen} variant="contained" fullWidth>
        Add New Product
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle>Add to Shopping List</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Product Name"
              variant="outlined"
              fullWidth
              value={item.product}
              onChange={e => setItem({ ...item, product: e.target.value })}
            />
            <TextField
              label="Amount"
              variant="outlined"
              fullWidth
              value={item.amount}
              onChange={e => setItem({ ...item, amount: e.target.value })}
            />
            {/* Price 입력 필드: type="number" 적용 */}
            <TextField
              label="Price"
              type="number"
              variant="outlined"
              fullWidth
              value={item.price === 0 ? '' : item.price}
              onChange={e => setItem({ ...item, price: Number(e.target.value) })}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">Cancel</Button>
          <Button 
            onClick={addItem} 
            variant="contained" 
            disabled={!item.product || !item.amount}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}