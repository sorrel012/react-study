import { getEventDetail } from '../plugins/eventAxios';
import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';
import axios from 'axios';

function EventDetailPage() {
  const event = useRouteLoaderData('event-detail');

  return <>{<EventItem event={event} />}</>;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const data = await getEventDetail(id);

  if (data.status === 'FAIL') {
    json(
      { message: 'Could not fetch Event detail' },
      {
        status: 500,
      },
    );
  } else if (data.status === 'SUCCESS') {
    return data.result.event;
  }
}

export async function action({ params, request }) {
  const eventId = params.eventId;

  await axios
    .request({
      method: request.method,
      url: `http://localhost:8080/events/${eventId}`,
    })
    .catch(() => {
      throw json({ message: 'Could not delete event.' }, { status: 500 });
    });

  return redirect('/events');
}
