const GET_MEMBERS = 'MEMBERS/GET_MEMBERS';

const loadMembers = (json) => ({
  type: GET_MEMBERS,
  json,
});

const members = [
  {
    id: 1,
    selected: false,
    name: "Leanne Graham",
    company: "DC united",
    status: "active",
    last_updated: "15-03-2022",
    notes: "This is the game",
  },
  {
  id: 2,
  selected: false,
  name: "Elisha Kyakopo",
  company: "Man city",
  status: "closed",
  last_updated: "15-03-2022",
  notes: "This is the game",
  },
]

const MembersReducer = (state = members, action) => {
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