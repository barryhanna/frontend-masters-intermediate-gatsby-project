import * as React from 'react';
import { navigate } from 'gatsby-link';

export default function RedirectToAccountDashboard() {
  React.useEffect(() => {
    navigate('/account/dashboard', { replace: true });
  }, []);

  return null;
}
