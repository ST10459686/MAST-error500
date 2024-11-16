// src/types/menu.ts
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  course: string;
}

export interface MenuContextType {
  menuItems: MenuItem[];
  addMenuItem: (item: MenuItem) => Promise<void>;
  deleteMenuItem: (itemId: string) => Promise<void>;
  loadMenuItems: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export type RootStackParamList = {
  Login: undefined;
  Home: { userName: string };
  Enter: undefined;
  View: undefined;
};

export type HomeScreenProps = {
  navigation: any;
  route: {
    params: {
      userName: string;
    };
  };
  
};

export type ViewScreenProps = {
  navigation: any;
};

export type EnterScreenProps = {
  navigation: any;
};
