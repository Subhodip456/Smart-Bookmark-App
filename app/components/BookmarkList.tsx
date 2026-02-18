import { Bookmark } from "../dashboard/page";

interface Props {
  bookmarks: Bookmark[];
  deleteBookmark: (id: number) => void;
}

export default function BookmarkList({ bookmarks, deleteBookmark }: Props) {
  if (bookmarks.length === 0) {
    return (
      <div className="text-center text-gray-400 mt-6">
        No bookmarks added yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {bookmarks.map((bookmark) => (
        <div
          key={bookmark.id}
          className="bg-gray-900 p-4 rounded-xl flex justify-between items-center shadow-md"
        >
          <div>
            <h4 className="font-semibold">{bookmark.title}</h4>
            <a
              href={bookmark.url}
              target="_blank"
              className="text-blue-400 text-sm"
            >
              {bookmark.url}
            </a>
          </div>

          <button
            onClick={() => deleteBookmark(bookmark.id)}
            className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
