// components/AddItem.tsx
import { useState } from "react";
import { TextField, Dialog, DialogActions, DialogTitle, DialogContent, Button } from "@mui/material";
import { Item } from "../App";
// 4번 라인의 경우 전에는 type.ts에서 불러왔었습니다.

type AddItemProps = {
    addItem: (item: Item) => void;
}
export default function AddItem(props: AddItemProps) {
    const [ open, setOpen] = useState(false);
    const [ item, setItem] = useState<Item>({
        product:'',
        amount:'',
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const addItem = () => {
        props.addItem(item);
        setItem({product:'', amount:''});
        handleClose();
    }

  return (
    <>
        <Button onClick={handleOpen} variant="outlined">Add Item</Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>New Item</DialogTitle>
            <DialogContent>
                <TextField value={item.product}label='Product' margin="dense" fullWidth
                    onChange={event => setItem({...item,product:event.target.value})}
                />
                <TextField value={item.amount}label='Amount' margin="dense" fullWidth
                    onChange={event => setItem({...item,amount:event.target.value})}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Cancel
                </Button>
                <Button onClick={addItem}>
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    </>
  );
}