package mvc.entity.livestock;

public interface Livestock {

	public Integer getLivestockId();

	public void setLivestockId(Integer livestockId);

	public String getName();

	public void setName(String name);

	public String getSpecies();

	public void setSpecies(String species);

	public String getGender();

	public void setGender(String gender);

	public String getNotes();

	public void setNotes(String notes);

	public Integer getAquariumId();

	public void setAquariumId(Integer aquariumId);

}
