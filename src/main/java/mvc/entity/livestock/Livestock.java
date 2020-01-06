package mvc.entity.livestock;

public interface Livestock {

	Integer getLivestockId();

	void setLivestockId(Integer livestockId);

	String getName();

	void setName(String name);

	String getSpecies();

	void setSpecies(String species);

	String getGender();

	void setGender(String gender);

	String getNotes();

	void setNotes(String notes);

	Integer getFkAquariumId();

	void setFkAquariumId(Integer fkAquariumId);

}
