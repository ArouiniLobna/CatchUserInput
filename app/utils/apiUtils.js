// import redirectUrl from 'utils/redirectUrl';
import { toast } from 'react-toastify';
export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error('Network response was not ok.');
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error(`API call failed. ${error}`);
  throw error;
}

/**
 * check http status code
 * this should exit to logged out cleanup and login if not authenticated
 * @param  response object
 * @return string or false
 */
export const handleErrorStatus = error => {
  if (error === undefined) {
    return false;
  }
  if (error && error.status !== undefined) {
    switch (error.status) {
      case 401:
        return '401 Error, please login to your Github account.';
      case 403:
        return '403';
      case 404:
        return 'Not Found';
      case 413:
        return 'File size too large (20MB limit)';
      default:
        return `Error ${error.status}`;
    }
  }
  return false;
};

/**
 * check http error code
 * this should display a banner to display info/error/warning
 * @param  error.response object
 * @return string or false
 */
export const handleErrorToast = error => {
  if (error === undefined) {
    return false;
  }
  if (error && error.status !== undefined) {
    switch (error.status) {
      case 400:
        toast.warn(error.data.message, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        return 'Invalid input';
      case 401:
        toast.warn('Not authenticated - Please log in', {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        return 'Not logged in';
      case 403:
        toast.warn(
          'Not authorised - You are not authorised for that operation',
          {
            position: toast.POSITION.BOTTOM_LEFT,
          },
        );
        return 'Not authorised';
      case 413:
        toast.warn('File size is too large (20MB limit)', {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        return 'File size too large';
      case 500:
        toast.warn(error.data.message, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        return 'Unexpected error';
      default:
        toast.warn('An unexpected error has occured.', {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        return `Error ${error.status}`;
    }
  }
  return false;
};
