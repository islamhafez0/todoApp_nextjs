"use client";

type todoProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleChecked: (id: string, complete: boolean) => void;
};

export function ListItem({ id, title, complete, toggleChecked }: todoProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        type="checkbox"
        id={id}
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleChecked(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
