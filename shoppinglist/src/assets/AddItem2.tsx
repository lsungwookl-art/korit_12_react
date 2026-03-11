// components/AddItem.tsx
import { useState } from "react";
import { TextField, Dialog, DialogActions, DialogTitle, DialogContent, Button } from "@mui/material";
import { Item } from "../App";
// 4번 라인의 경우 전에는 type.ts에서 불러왔었습니다.

export default function AddItem(props) {
    const [ open, setOpen] = useState(false);
    const [ item, setItem] = useState<Item>({
        product:'',
        amount:'',
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setClose(false);
    const handleChange = event => {
        setItem({...item, [event.target.name]: event.target.value})
    }

  return (
    <>
        <button onClick={handleOpen}>Add Item2</button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>New Item</DialogTitle>
            <DialogContent>
                <TextField value={item.product}label='Product' margin="dense" fullWidth
                    onChange={handleChange} name='product'
                />
                <TextField value={item.amount}label='Amount' margin="dense" fullWidth
                    onChange={handleChange} name='amount'
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Cancel
                </Button>
                <Button onClick={AddItem}>
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    </>
  );
}