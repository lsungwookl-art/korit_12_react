import React, { useState, ChangeEvent } from 'react';
import { 
  TextField, 
  Button, 
  Stack, 
  Box, 
  Typography, 
  Paper,
  Divider
} from '@mui/material';
import { AddCircle as AddIcon } from '@mui/icons-material';

interface Car {
  id: number;
  model: string;
  price: string;
}

const CarInput: React.FC = () => {

  const [car, setCar] = useState({ model: '', price: '' });
  const [cars, setCars] = useState<Car[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCar((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddCar = () => {
    if (!car.model || !car.price) {
      alert("데이터를 모두 입력해주세요!");
      return;
    }

    const newCar: Car = {
      id: Date.now(), 
      model: car.model,
      price: car.price
    };

    setCars((prev) => [...prev, newCar]);
    
    setCar({ model: '', price: '' });
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          차량 등록 서비스
        </Typography>
        
        <Stack spacing={2}>
          <TextField
            fullWidth
            label="차량 모델"
            name="model"
            variant="outlined"
            size="small"
            value={car.model}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="가격 (만원)"
            name="price"
            variant="outlined"
            size="small"
            value={car.price}
            onChange={handleChange}
          />
          <Button 
            variant="contained" 
            startIcon={<AddIcon />}
            onClick={handleAddCar}
            fullWidth
          >
            리스트에 추가
          </Button>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography variant="subtitle2" color="text.secondary">
          현재 등록된 차량 수: {cars.length}대
        </Typography>
        <Box component="ul" sx={{ pl: 2, mt: 1 }}>
          {cars.map((item) => (
            <li key={item.id}>
              <Typography variant="body2">
                {item.model} - {item.price}만원
              </Typography>
            </li>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default CarInput;