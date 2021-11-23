import { useEffect, useState, useCallback, useMemo } from "react";

import { apiCityBus } from '../api';

export default function useHttp() {
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [data, setData] = useState([]);
}