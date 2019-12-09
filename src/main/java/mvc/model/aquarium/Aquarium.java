package mvc.model.aquarium;

import java.util.Date;
import java.util.Set;

import mvc.model.livestock.LivestockImpl;

interface Aquarium {

	public Integer getAquariumId();

	public void setAquariumId(Integer aquariumId);

	String getName();

	void setName(String name);

	String getType();

	void setType(String type);

	Integer getGallon();

	void setGallon(Integer gallon);

	String getNotes();

	void setNotes(String notes);

	Date getDate();

	void setDate(Date date);

	public Set<LivestockImpl> getLivestock();

	public void setLivestock(Set<LivestockImpl> livestock);

}
