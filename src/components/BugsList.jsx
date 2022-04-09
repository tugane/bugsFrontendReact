import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnresolvedBugs, loadBugs, resolveBug } from "../store/bugs";

function BugsList() {
  const dispatch = useDispatch();
  const bugs = useSelector(getUnresolvedBugs);

  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  const handleResolve = (bugId) => {
    dispatch(resolveBug(bugId));
  };

  return (
    <ul>
      {bugs.map((bug) => (
        <li key={bug.id}>
          {bug.description}
          <button onClick={() => handleResolve(bug.id)}>Resolve</button>
        </li>
      ))}
    </ul>
  );
}

export default BugsList;
