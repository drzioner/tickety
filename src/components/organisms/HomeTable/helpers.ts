export declare type ShowType = {
  id: string | number,
  title?: string,
  price?: number,
  hour?: string,
  avatar?: string,
};

export declare type HeaderTableType = {
  name: string;
  uid: string;
};

export const headers: HeaderTableType[] = [
  { name: "SHOW", uid: "show" },
  { name: "PRICE", uid: "price" },
  { name: "HOUR", uid: "hour" },
  { name: "ACTIONS", uid: "actions" },
];
export const shows: ShowType[] = [
  {
    id: 1,
    title: "Tony Reichert",
    price: 15,
    hour: "16:00",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: 2,
    title: "Zoey Lang",
    price: 25,
    hour: "18:00",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: 3,
    title: "Jane Fisher",
    price: 50,
    hour: "20:00",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    id: 4,
    title: "William Howard",
    price: 35,
    hour: "22:00",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
];

export const showById = (showId: number): ShowType => {
  const show = shows.find((show) => show.id === showId);
  if (!show) {
    throw new Error('Show not found');
  }
  return show;
}
