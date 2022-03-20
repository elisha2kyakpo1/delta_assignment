const GET_MEMBERS = 'MEMBERS/GET_MEMBERS';

const loadMembers = (json) => ({
  type: GET_MEMBERS,
  json,
});

const MembersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MEMBERS:
      return action.json.map((users) => {
        const {
          name,
          company,
          status,
          last_updated,
          notes,
        } = users;
        return {
          name,
          company,
          status,
          last_updated,
          notes,
        };
      });
    default:
      return state;
  }
};

export {
  MembersReducer,
  loadMembers,
};