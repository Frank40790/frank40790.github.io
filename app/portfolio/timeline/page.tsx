export default function Timeline() {
    return (
        <>
            <title>Timeline</title>
            <div className="max-w-2xl mx-auto p-4 pt-6">
                {events.map((event) => (
                    <Node event={event}/>
                ))}
            </div>
        </>
    );
  }
  
  interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
  }

  const events: Event[] = [
    {
      id: 1,
      title: 'Event 1',
      description: 'This is the first event',
      date: '2022-01-01',
    },
    {
      id: 2,
      title: 'Event 2',
      description: 'This is the second event',
      date: '2022-01-15',
    },
    {
      id: 3,
      title: 'Event 3',
      description: 'This is the third event',
      date: '2022-02-01',
    },
  ];
  
  function Node({ event }: { event: Event }) {
    return (
        <>
        <div className="flex flex-row">
          <div className="flex flex-col p-6">
            <div className="bg-gray-500 h-20 w-20 rounded-full align-middle"></div>
          </div>
          <div className="flex flex-col p-6">
            <div className="text-lg font-bold">{event.title}</div>
            <div className="text-gray-600">{event.description}</div>
            <div className="text-gray-500">{event.date}</div> 
          </div>
        </div>
        </>
    );
  }