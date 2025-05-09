export interface Price {
  date: string;
  is_price_upon_request: null;
  local_adjusted_price: null;
  local_currency: null;
  local_price: null;
  native_adjusted_price: number;
  native_currency: string;
  native_price: number;
  type: string;
  local_price_formatted: string;
  native_price_formatted: string;
}

export interface CalendarData {
  available: boolean;
  date: string;
  available_for_checkin: boolean;
  min_nights: number;
  max_nights: number;
  price: Price;
}

export interface CalendarMonth {
  abbr_name: string;
  name: string;
  day_names: string[];
  month: string;
  dynamic_pricing_updated_at: string;
  listing_id: number;
  year: number;
  days: CalendarData[];
}
