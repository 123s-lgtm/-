export default function handler(req, res) {
  const foodList = [
    { name: '辣椒炒肉', price: '12元' },
    { name: '武汉热干面', price: '8元' },
    { name: '盖浇滑蛋饭', price: '15元' }
  ];
  
  // 随机选一个
  const winner = foodList[Math.floor(Math.random() * foodList.length)];
  
  // 返回 JSON 数据
  res.status(200).json(winner);
}
