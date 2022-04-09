import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBug, getUnresolvedBugs, loadBugs, resolveBug } from "../store/bugs";

function BugsList() {
  const dispatch = useDispatch();
  const bugs = useSelector(getUnresolvedBugs);

  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  const handleResolve = (bugId) => {
    dispatch(resolveBug(bugId));
  };

  const [bug, setBug] = useState("");

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <input
        type="text"
        onChange={(event) => setBug(event.target.value)}
        value={bug}
      />
      <button onClick={() => dispatch(addBug({ description: bug }))}>
        Add
      </button>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            {bug.description}
            <button onClick={() => handleResolve(bug.id)}>Resolve</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BugsList;
