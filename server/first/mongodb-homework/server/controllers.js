import member from "./member.model.js";

export async function getAllFacultyMembers(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const skip = parseInt(req.query.skip) || 0;

    const totalMembers = await member.countDocuments();

    const members = await member.find().select("-__v").skip(skip).limit(limit);
    res.json({
      message: "Members retrieved successfully ✅",
      total: totalMembers,
      count: members.length,
      members,
      page: Math.floor(skip / limit) + 1,
      limit,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to get members", error: error.message });
  }
}

export async function addFacultyMember(req, res) {
  try {
    const memberData = Array.isArray(req.body) ? req.body : [req.body];

    await member.insertMany(memberData);
    const addedMembers = await member.insertMany(memberData);

    res.status(201).json({
      message: "members added successfuly...✅ ",
      members: addedMembers,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to add member", error: error.message });
  }
}

export async function updateFacultyMember(req, res) {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updataData = await member.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    res.json({
      message: "Member updated successfully...✅",
      newMember: updataData,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to update data", error: error.message });
  }
}

export async function deleteFacultyMember(req, res) {
  try {
    const { id } = req.params;
    await member.findByIdAndDelete(id);
    res.json({ message: "Member deleted successfully...✅" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to delete member", error: error.message });
  }
}
