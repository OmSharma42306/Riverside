// export default function AllSessions(){
//     const sessions= [
//     {
//       "id": 2,
//       "userId": 1,
//       "sessionCode": "5274acbb-8296-42bb-9547-0019bcf72eb1",
//       "sessionName": "OmKaPodcast"
//     },
//     {
//       "id": 3,
//       "userId": 1,
//       "sessionCode": "7599b6c8-9b89-4220-8d63-3575373c7645",
//       "sessionName": "OM Sagar talk"
//     },
//     {
//       "id": 4,
//       "userId": 1,
//       "sessionCode": "51f3ee13-2539-4add-be41-9877887b7d71",
//       "sessionName": "Gyan Ki Batein"
//     },
//     {
//       "id": 5,
//       "userId": 1,
//       "sessionCode": "51406d8d-aa27-47df-9864-e00baa808c04",
//       "sessionName": "PodWithXYZ"
//     },
//     {
//       "id": 6,
//       "userId": 1,
//       "sessionCode": "8424264d-1d4d-4639-b4d0-f24443e31d90",
//       "sessionName": "Kya hua"
//     },
//     {
//       "id": 7,
//       "userId": 1,
//       "sessionCode": "9510bf11-61b2-4089-b983-dcf5ee76a9ec",
//       "sessionName": "AkandaNoor"
//     },
//     {
//       "id": 8,
//       "userId": 1,
//       "sessionCode": "5f9ebdb1-b9cb-428b-b804-787441e5b96e",
//       "sessionName": "Kaisa"
//     }
//   ]

//     return <div>
//         <h1>All Sessions</h1>
//         {sessions && sessions.length>0 ? 
//         sessions.map((s)=>{
//             return <div>
                
//                 <h2>Session Name : {s.sessionName}</h2>
//                 <h3>Session Code : {s.sessionCode}</h3>
//             </div>
//         })
//         : ""}
//     </div>
// }
// with ui
import { Link } from 'react-router-dom';
import { Mic, Copy, ArrowRight } from 'lucide-react';

export default function AllSessions() {
  const sessions = [
    {
      "id": 2,
      "userId": 1,
      "sessionCode": "5274acbb-8296-42bb-9547-0019bcf72eb1",
      "sessionName": "OmKaPodcast"
    },
    {
      "id": 3,
      "userId": 1,
      "sessionCode": "7599b6c8-9b89-4220-8d63-3575373c7645",
      "sessionName": "OM Sagar talk"
    },
    {
      "id": 4,
      "userId": 1,
      "sessionCode": "51f3ee13-2539-4add-be41-9877887b7d71",
      "sessionName": "Gyan Ki Batein"
    },
    {
      "id": 5,
      "userId": 1,
      "sessionCode": "51406d8d-aa27-47df-9864-e00baa808c04",
      "sessionName": "PodWithXYZ"
    },
    {
      "id": 6,
      "userId": 1,
      "sessionCode": "8424264d-1d4d-4639-b4d0-f24443e31d90",
      "sessionName": "Kya hua"
    },
    {
      "id": 7,
      "userId": 1,
      "sessionCode": "9510bf11-61b2-4089-b983-dcf5ee76a9ec",
      "sessionName": "AkandaNoor"
    },
    {
      "id": 8,
      "userId": 1,
      "sessionCode": "5f9ebdb1-b9cb-428b-b804-787441e5b96e",
      "sessionName": "Kaisa"
    }
  ];

  const copySessionCode = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Your Sessions</h1>
          <Link 
            to="/create-session" 
            className="btn btn-primary flex items-center"
          >
            <Mic size={18} className="mr-2" />
            New Session
          </Link>
        </div>

        {sessions && sessions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <div 
                key={session.id}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors border border-gray-700"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-white mb-2">
                      {session.sessionName}
                    </h2>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <span>Session Code:</span>
                      <code className="bg-gray-900 px-2 py-1 rounded">
                        {session.sessionCode.slice(0, 8)}...
                      </code>
                      <button 
                        onClick={() => copySessionCode(session.sessionCode)}
                        className="text-indigo-400 hover:text-indigo-300 transition-colors"
                        title="Copy session code"
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <Link
                    to={`/session/${session.sessionCode}`}
                    className="flex items-center justify-center text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Join Session
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mic size={24} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-300 mb-2">No sessions yet</h3>
            <p className="text-gray-400 mb-6">Create your first recording session to get started</p>
            <Link to="/create-session" className="btn btn-primary">
              Create New Session
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}