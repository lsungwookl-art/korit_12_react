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
  const handleClose = () => {setOpen(false);
    setItem({ product: '', amount: '', price: 0 });
  };

  const addItem = () => {
    props.addItem(item);
    handleClose();
  };

  return (
    <div style={{ marginTop: '20px', marginBottom: '10px' }}>
      <Button onClick={handleOpen} variant="contained" style={{marginTop:'5px'}}>
        항목 추가
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>새 항목</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="품목"
              margin="dense"
              fullWidth
              onChange={e => setItem({ ...item, product: e.target.value })}
            />
            <TextField
              label="수량"
              margin="dense"
              fullWidth
              onChange={e => setItem({ ...item, amount: e.target.value })}
            />
            <TextField
              label="가격"
              type="number"
              margin="dense"
              fullWidth
              onChange={e => setItem({ ...item, price: Number(e.target.value) })}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={addItem} variant="contained">추가</Button>
          <Button onClick={handleClose} color="inherit">취소</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}