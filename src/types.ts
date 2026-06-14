export interface Route {
  id: string;
  from: string;
  to: string;
  distance: string;
  majorHubs: string[];
  duration: string;
  status: 'Active' | 'High Demand' | 'Express';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  loadRange: string;
}

export interface ActiveTab {
  id: 'home' | 'services' | 'about' | 'contact' | 'estimator';
}

export interface EstimatorState {
  origin: string;
  destination: string;
  cargoType: string;
  weight: number; // in Tonnes (min 10)
  ownerName: string;
  notes: string;
}
