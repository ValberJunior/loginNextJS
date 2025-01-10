import { register, collectDefaultMetrics } from 'prom-client';

collectDefaultMetrics();

export const getMetrics = () => register.metrics();